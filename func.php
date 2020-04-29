<?php
// функции

/*
 * Проверка существоватия ip
 *
 * @param string $host сайт без HTTP
 * @return string false в случае отсуствия
 */
function getIpHost ($host) {
    $url = parse_url('http://' . $host);
    if ($info = gethostbynamel($url['host'])) {
        foreach ($info as $ip) {
            return $ip;
        }
    } else return false;
};

/*
 * Отладочная функция
 *
 *  @param mixed $var
  * @return $string html
 */
function dump($var) {
    echo '<pre>';
    var_dump($var);
    echo '</pre>';
}

/*
 * Проверка ответа сервера HTTP
 *
 * @param string $host сайт без HTTP
 * @return string false в случае отсуствия
 */
function getStatusHttp($url,$info = false){
    $arr = @get_headers('http://'.$url, 1);
    if(!empty($arr[0])){
        $code = substr($arr[0], 9, 3);
        return $code;
    } else { return false; }
}

/*
 * Проверка ответа сервера HTTPS
 *
 * @param string $host сайт без HTTPS
 * @return string false в случае отсуствия
 */
function getStatusHttps($url,$info = false){
    $arr = @get_headers('https://'.$url, 1);
    if(!empty($arr[0])){
        $code = substr($arr[0], 9, 3);
        return $code;
    } else { return false; }
}


echo "Starting\n";

# Создание нового обработчика.
$gmworker = new GearmanWorker();

# Добавление сервера по умолчанию (localhost).
$gmworker->addServer('127.0.0.1', '4730');

# Регистрация функции "reverse" на сервере. Изменение функции обработчика на
# "reverse_fn_fast" для более быстрой обработки без вывода.
$gmworker->addFunction("reverse", "reverse_fn");

print "Waiting for job...\n";
while ($gmworker->work()) {
    if ($gmworker->returnCode() != GEARMAN_SUCCESS) {
        echo "return_code: " . $gmworker->returnCode() . "\n";
        break;
    }
}

function reverse_fn($job)
{


    include_once('/home/spf/public_html/pars/config.php');
    R::freeze(true);
    timer("begin");
    $sites = R::find('sitestest', "http is NULL and block !=1 ORDER BY id ASC LIMIT 1");
    $id = 0;
    $url = "";
    foreach ($sites as $sit) {
        $id = $sit->id;
        $url = $sit->url;
        echo $url . "\n";
    }
    if (!pingCheck($url)) {
        $site = R::load('sitestest', $id);
        $site->block = 0;
        $site->http = 0;
        $site->https = 0;
        R::store($site);
        echo "not work http://" . $site->url . " \n";
        return $site->url;
    } else {
        timer("ping check ");
        $site = R::load('sitestest', $id);
        $site->block = 1;
        R::store($site);
        $site = R::load('sitestest', $id);
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
        return $site->url;
    };

}
