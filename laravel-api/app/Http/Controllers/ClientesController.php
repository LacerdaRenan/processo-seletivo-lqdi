<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Models\Clientes;

class ClientesController extends Controller
{
    public function inserirCliente(Request $request) {

        $nome = strtolower($request->input('nome'));
        $email = strtolower($request->input('email'));

        try {
            $cliente = Clientes::create([
                'nome' => $nome,
                'email' => $email
            ]);

            return response()->json(['id' => $cliente->id]);
        } catch(\Illuminate\Database\QueryException $error) {
            if ($error->errorInfo[1] === 1062) {
                return response()->json(['error' => 'Email já cadastrado.'], 422);
            }
        }
    }

    public function index(Request $request) {
        $clientes = Clientes::all();
        return response()->json($clientes);
    }

}
