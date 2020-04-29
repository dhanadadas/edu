<?php

echo "Starting\n";

# Create our worker object.
$gmworker= new GearmanWorker();

# Add default server (localhost).
//$gmworker->addServer();
$gmworker->addServer('127.0.0.1', '4730');
# Register function "reverse" with the server. Change the worker function to
# "reverse_fn_fast" for a faster worker with no output.
$gmworker->addFunction("reverse", "reverse_fn");

print "Waiting for job...\n";
while($gmworker->work())
{
    if ($gmworker->returnCode() != GEARMAN_SUCCESS)
    {
        echo "return_code: " . $gmworker->returnCode() . "\n";
        break;
    }
}

function reverse_fn($job)
{
    // return strrev($job->workload());

    $id = $job->workload();

    //sleep(rand(0,5));
    include_once('/home/spf/public_html/pars/config.php');
    dump ($job->workload());
    R::freeze( true );
    timer("begin");
    //$sites = R::find('sitestest', "http is NULL and block !=1 ORDER BY id ASC LIMIT 1");
    $site=R::findOne('sitestest', "id = ?",[$id]);

//$site=R::findOne('sitestest', 'http is NULL and block !=1');
    $site->block=1;
    R::store($site);

    $id = 0;
    $url = $site->url;
    //foreach ($sites as $sit) {
    //    $id = $sit->id;
    //    $url = $sit->url;
    //    echo $url . "\n";
    //}

    //$site = R::load('sitestest', $id);
    $site->block = 1;
    R::store($site);
    if (!pingCheck($url)) {
        //$site = R::load('sitestest', $id);
        $site->block = 0;
        $site->http = 0;
        $site->https = 0;
        R::store($site);
        echo "not work http://" . $site->url . " \n";
        R::close();
        return $id;
    } else {
        timer("ping check ");
        //$site = R::load('sitestest', $id);
        $site->block = 0;
        //echo $site->url."\n";
        timer("db");
        echo getIpHost($site->url) . "\n";
        timer("getIpHost ");
        $site->http = getStatusHttp($site->url);
        timer("getStatusHttp");
        if (!pingCheck("https://" . $url)) {
            $site->https = 0;
            echo "not work https://" . $site->url . " \n";
        } else {
            $site->https = getStatusHttps($site->url);
        }
        timer("getStatusHttps");
        echo $site->url . "(" . $site->http . ", " . $site->https . ")\n";
        R::store($site);
        timer("and");
        R::close();
        return $id;
    }}

?>