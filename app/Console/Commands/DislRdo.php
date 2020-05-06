<?php


namespace App\Console\Commands;

use DB;


class DislRdo
{
    $initdisl = DB::select('exec INITDISLRDO2 ?, ?, ?, ?, ?, ?, ?, ?, ?, ?', []);

}