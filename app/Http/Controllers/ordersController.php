<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\orders;

class ordersController extends Controller
{
    public function addOrder(Request $request)
    {
        $this->validate($request,[
            'name' => 'required',
            'adress' => 'required',
            'tell' => 'required'
        ]);
        $order = new orders();
        $order->name = $request->name;
        $order->adress = $request->adress;
        $order->tell = $request->tell;
        $order->save();
        return response()->JSON('hellow wordl',200);
    }

    public function getOrders(){
        return response()->JSON(orders::all());
    }
}
