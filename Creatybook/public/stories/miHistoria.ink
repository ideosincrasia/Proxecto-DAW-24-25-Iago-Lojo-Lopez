// Definir algunas variables globales
VAR player_name = "Jugador"

// Punto de entrada
-> start

=== start ===
Hola, {player_name}. Esta es una historia interactiva de ejemplo.  
¿Quieres ir al bosque o a la ciudad?

+ [Ir al bosque]
    -> bosque
+ [Ir a la ciudad]
    -> ciudad

=== bosque ===
Está oscuro y los árboles se mueven.  
Ves un camino que continúa o un claro luminoso.

+ [Seguir el camino]
    -> bosque_camino
+ [Ir al claro]
    -> bosque_claro

=== bosque_camino ===
Sigues el camino y te encuentras con un puente.  
-> DONE

=== bosque_claro ===
Llegas a un claro lleno de luciérnagas.  
-> DONE

=== ciudad ===
La ciudad está llena de ruidos.  
Ves un mercado bullicioso o una taberna oscura.

+ [Ir al mercado]
    -> ciudad_mercado
+ [Ir a la taberna]
    -> ciudad_taberna

=== ciudad_mercado ===
Compras algo de comida y continúas.  
-> DONE

=== ciudad_taberna ===
Entras en la taberna y escuchas historias de viajeros.  
-> DONE