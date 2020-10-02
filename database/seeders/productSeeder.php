<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class productSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for ($i = 1;$i<=100;$i++){
            DB::table('products')->insert([
                'category' => $this->randCategory(rand(1,5)),
                'title' => 'компьютер'.$i,
                'description' => 'описание компьютера'.$i,
                'price' => rand(40000,600000),
            ]);
        }
    }

    private function randCategory(int $randomInteger)
    {
        switch ($randomInteger){
            case 1:
                return "computer";
            case 2:
                return "laptop";
            case 3:
                return "keyboard";
            case 4:
                return "mouse";
            case 5:
                return "headphones";
        }
    }
}
