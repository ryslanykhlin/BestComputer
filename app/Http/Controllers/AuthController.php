<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Validator;
use Auth;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|unique:users',
            'email' => 'required|unique:users|email',
            'password' => 'required'
        ]);

        if($validator->fails())
        {
            return response()->json([
                'status' => 'error',
                'errors' => $validator->errors()
            ], 200);
        }

        $user = new User();
        $user->name = $request->name;
        $user->email = $request->email;
        $user->password = bcrypt($request->password);
        $user->is_admin = false;
        $user->save();
        return response()->json(['status' => 'success'], 200);
    }

    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');

        if (!$token = Auth::attempt($credentials)) {
            return response()->json(['error' => 'true'], 200);
        }

        return $this->respondWithToken($token);
    }

    public function user()
    {
        return response()->json(['user' => Auth::user()], 200);
    }

    protected function respondWithToken($token)
    {
        return response()->json([
            'error' => 'false',
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 60
        ]);
    }
}
