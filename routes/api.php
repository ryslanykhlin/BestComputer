<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

//product
Route::apiResource('products','App\Http\Controllers\productController');

Route::prefix('auth')->group(function() {

    //register
    Route::post('register', 'App\Http\Controllers\AuthController@register');

    //login
    Route::post('login', 'App\Http\Controllers\AuthController@login');

    //is auth
    Route::post('user', 'App\Http\Controllers\AuthController@user');
});

Route::prefix('orders')->group(function(){
    Route::post('add','App\Http\Controllers\ordersController@addOrder');

    Route::post('getAll','App\Http\Controllers\ordersController@getOrders');
});