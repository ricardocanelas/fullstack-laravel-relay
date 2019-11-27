<?php

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        DB::statement('SET FOREIGN_KEY_CHECKS=0;');
        DB::table('users')->truncate();

        factory(App\User::class)->create(["email" => "admin@mail.com"]);
        factory(App\User::class, 10)->create();

        DB::statement('SET FOREIGN_KEY_CHECKS=1;');
    }
}
