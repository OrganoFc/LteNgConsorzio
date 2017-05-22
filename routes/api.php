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
/*
Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
*/

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:api');



Route::get('dipendente/{search}','ControllerDipendente@search');

Route::post('automezzo/{automezzo_id}/utilizzo','ControllerAutomezzoUtilizzo@create');
Route::put('automezzo/utilizzo/{utilizzo_id}','ControllerAutomezzoUtilizzo@update');
Route::patch('automezzo/utilizzo/{utilizzo_id}','ControllerAutomezzoUtilizzo@update');
