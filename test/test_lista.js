/**
 * Cuando se agrega un elemento al principio la lista de claves esta ordenada.
 * Cuando se agrega un elemento al final la lista de claves esta ordenada.
 * No se pueden insertar elementos si su clave no es una cadena de texto.
 * Se debe poder eliminar un elemento a partir de su clave.
 */

const assert = require("chai").assert;
const Lista = require("../src/lista.js");

describe("en una lista vacia" , function() {
    var lista = new Lista();

    it("hay cero elementos", function() {
        assert.equal(lista.count(), 0);
    })

    it("no se encuentra ninguna clave", function(){
        assert.isNaN(lista.find("clave"));
    })
})

describe("no se debe poder agregar un elemento", function(){
    var lista = new Lista();
    lista.add(14,"valor");

    it("si su clave no es una string", function(){
        assert.equal(lista.count(),0);
    })
})

describe("cuando se agrega un elemento a una lista vacía", function(){
    var lista = new Lista();
    lista.add("clave", "valor");

    it("hay un elemento", function(){
        assert.equal(lista.count(),1);
    })

    it("se puede recuperar el valor a partir de la clave", function(){
        assert.equal(lista.find("clave"), "valor");
    })

    it("la lista de claves esta ordenada", function(){
        assert.deepEqual(lista.getList(),['clave']);
    })
})

describe("cuando se agrega una clave que ya está en la lista", function(){
    var lista = new Lista();
    lista.add("clave", "valor");
    lista.add("clave", "valor2");

    it("se actualiza el elemento",function(){
        assert.equal(lista.find("clave"), "valor2");
    })
})

describe("cuando se agrega un elemento al principio", function(){
    var lista = new Lista();
    lista.add("clave","valor");
    lista.add("arbol","valor2");

    it("la lista de claves esta ordenada", function(){
        assert.deepEqual(lista.getList(),["arbol","clave"]);
    })
})

describe("cuando se agrega un elemento al final", function(){
    var lista = new Lista();
    lista.add("arbol","valor2");
    lista.add("clave","valor");

    it("la lista de claves esta ordenada", function(){
        assert.deepEqual(lista.getList(),["arbol","clave"]);
    })
})

describe("cuando se elimina un elemento de una lista con datos",function(){
    var lista = new Lista();
    lista.add("arbol","valor2");
    lista.remove("arbol");

    it("la cantidad se actualiza correctamente", function(){
        assert.equal(lista.count(),0);
    })
    it("la clave no se encuentra almacenada en la lista", function(){
        assert.deepEqual(lista.getList(), []);
    })
    it("la clave no se encuentra al buscarla", function(){
        assert.deepEqual(lista.find("arbol"),NaN);
    })
})