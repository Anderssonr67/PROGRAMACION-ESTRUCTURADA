def ejercicio1():
    nombre = input("Ingrese su nombre completo: ")
    nombre_limpio = nombre.strip()
    caracteres_sin_espacios = len(nombre_limpio.replace(" ", ""))
    print("\n--- Resultado ---")
    print("Nombre limpio:", nombre_limpio)
    print("Cantidad de caracteres (sin contar espacios):", caracteres_sin_espacios)


def ejercicio2():
    correo = input("Ingrese su correo electrónico: ")
    correo_normalizado = correo.lower()
    es_gmail = correo_normalizado.endswith("@gmail.com")
    print("\n--- Resultado ---")
    print("Correo normalizado:", correo_normalizado)
    if es_gmail:
        print("El correo pertenece al dominio @gmail.com")
    else:
        print("El correo NO pertenece al dominio @gmail.com")


def ejercicio3():
    codigo = input("Ingrese un código: ")
    ultimos_4 = codigo[-4:]
    print("\n--- Resultado ---")
    print("Últimos 4 caracteres:", ultimos_4)


def ejercicio4():
    mensaje = input("Ingrese un mensaje: ")
    posicion = mensaje.lower().find("error")
    print("\n--- Resultado ---")
    if posicion != -1:
        print(f"La palabra 'error' aparece en la posición {posicion}")
    else:
        print("La palabra 'error' no aparece en el mensaje")


# Menú principal
def menu():
    while True:
        print("\n=== Menú de Ejercicios ===")
        print("1. Nombre completo (quitar espacios y contar caracteres)")
        print("2. Validar correo electrónico con @gmail.com")
        print("3. Mostrar últimos 4 caracteres de un código")
        print("4. Buscar la palabra 'error' en un mensaje")
        print("5. Salir")

        opcion = input("Seleccione una opción: ")

        if opcion == "1":
            ejercicio1()
        elif opcion == "2":
            ejercicio2()
        elif opcion == "3":
            ejercicio3()
        elif opcion == "4":
            ejercicio4()
        elif opcion == "5":
            print("Saliendo del programa...")
            break
        else:
            print("Opción no válida. Intente nuevamente.")

# Ejecutar menú
menu()
