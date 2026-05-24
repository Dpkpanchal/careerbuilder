<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class ITIDataSeeder extends Seeder
{
    public function run()
    {
        $now = Carbon::now();

        $itis = [
    [
        'name' => 'ST. XAVIERS ITC',
        'type' => 'sponsored',
        'address' => 'P.O. BASANTI, DIST. SOUTH 24 PRGS., PIN-743312',
        'phone' => '03218-232224',
        'trades' => [
            ['name' => 'TURNER', 'duration' => '2YR'],
            ['name' => 'ELECTRICIAN', 'duration' => '2YR'],
            ['name' => 'WELDER', 'duration' => '1YR'],
        ],
    ],
    [
        'name' => 'ST. VINCENT ITC',
        'type' => 'sponsored',
        'address' => 'HALL VIEW PARK, ASANSOL, PIN-713304, DIST. BURDWAN',
        'phone' => '0341-2282343',
        'trades' => [
            ['name' => 'TURNER', 'duration' => '2YR'],
            ['name' => 'ELECTRICIAN', 'duration' => '2YR'],
            ['name' => 'WELDER', 'duration' => '1YR'],
        ],
    ],
    [
        'name' => 'RAMKRISHNA MISSION SILPAYATAN',
        'type' => 'sponsored',
        'address' => 'P.O. BELUR MATH, DIST. HOWRAH, PIN-711202',
        'phone' => '2654-1052',
        'trades' => [
            ['name' => 'FITTER', 'duration' => '2YR'],
            ['name' => 'ELECTRICIAN', 'duration' => '2YR'],
            ['name' => 'TURNER', 'duration' => '2YR'],
            ['name' => 'WELDER', 'duration' => '1YR'],
        ],
    ],
    [
        'name' => 'SWAMI MAHADEVANANDA SILPA VIDYAPEETH',
        'type' => 'sponsored',
        'address' => '28, RIVER SIDE ROAD, BARRACKPORE, DIST. NORTH 24 PRGS., PIN-700120',
        'phone' => null,
        'trades' => [
            ['name' => 'MECHANIC REFRIGERATION & AIR CONDITION', 'duration' => '2YR'],
            ['name' => 'ELECTRICIAN', 'duration' => '2YR'],
            ['name' => 'TURNER', 'duration' => '2YR'],
            ['name' => 'DRAUGHTS MAN MECHANICAL', 'duration' => '2YR'],
            ['name' => 'WELDER', 'duration' => '1YR'],
        ],
    ],
    [
        'name' => 'DON BOSCO TECHNICAL SCHOOL',
        'type' => 'private',
        'address' => 'P.O. LILUAH, HOWRAH-711204',
        'phone' => '2655-5431',
        'trades' => [
            ['name' => 'MACHINIST', 'duration' => '2YR'],
            ['name' => 'TURNER', 'duration' => '2YR'],
            ['name' => 'FITTER', 'duration' => '2YR'],
        ],
    ],
];

foreach ($itis as $iti) {
    $collegeId = DB::table('iti_colleges')->insertGetId([
        'name'       => $iti['name'],
        'type'       => $iti['type'],
        'address'    => $iti['address'],
        'phone'      => $iti['phone'],
        'created_at' => $now,
        'updated_at' => $now,
    ]);

    foreach ($iti['trades'] as $trade) {
        DB::table('iti_trades')->insert([
            'iti_college_id' => $collegeId,
            'trade_name'     => $trade['name'],
            'duration'       => $trade['duration'],
            'created_at'     => $now,
            'updated_at'     => $now,
        ]);
    }
}







        
  

    }
}
