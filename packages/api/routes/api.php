<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('/info', function () {
    return [
        "app" => 'Personal Finance',
        "version" => '0.1'
    ];
});

Route::get('/users', function () {
    $users = App\User::all();
    return $users;
});

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
