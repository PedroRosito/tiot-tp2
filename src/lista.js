module.exports = class Lista {

    #elementos = new Map();

    constructor(){
    }

    /**
     * Función utilizada para obtener la cantidad de pares clave valor que hay en la lista.
     * @returns La cantidad de elementos en la lista.
     */
    count(){
        return this.#elementos.size;
    }

    /**
     * Función utilizada para encontrar un valor en función de su clave en la lista.
     * @param {*} clave
     * @returns El valor si existe, NaN en caso contrario.
     */
    find(clave){
        if(this.#elementos.size > 0){
            return this.#elementos.get(clave);
        }
        return NaN;
    }

    /**
     * Función utilizada para añadir un nuevo par clave:valor en la lista.
     * @param {*} clave Debe ser una string.
     * @param {*} valor 
     */
    add(clave, valor){
        if(typeof clave === 'string'){
            this.#elementos.set(clave , valor);
        }
    }

    /**
     * Función utilizada para remover un elemento de la lista a partir de su clave.
     * @param {*} clave 
     */
    remove(clave){
        this.#elementos.delete(clave);
    }

    /**
     * Función utilizada para obtener todos los valores de la lista ordenados por clave.
     * @returns La lista ordenada.
     */
    getList(){
        var elementos = Array.from(this.#elementos.keys());

        return elementos.sort();
    }
};