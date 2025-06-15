// Variables globales
VAR player_name = "Viajero"
LIST INVENTARIO = nada

// Punto de entrada
-> start

=== start ===
Hola, {player_name}.  
Te encuentras en la Cámara de los Umbrales. Tres portales flotan frente a ti: uno brilla con luz azul, otro está envuelto en sombras, y un tercero palpita con energía verde.

¿Qué portal eliges?

+ [Portal azul: Reino de Aeris]
    -> portal_azul
+ [Portal sombrío: Yermo de Ceniza]
    -> portal_oscuro
+ [Portal verde: Mente Prisma]
    -> portal_verde

=== portal_azul ===
Has ingresado al **Reino de Aeris**, un lugar de islas flotantes y criaturas metálicas aladas.  
Frente a ti hay un **monolito flotante** y un **mercader éterico** que ofrece artefactos.

+ [Inspeccionar el monolito]
    -> aeris_monolito
+ [Hablar con el mercader]
    -> aeris_mercader

=== aeris_monolito ===
Colocas tu mano sobre el monolito. Una runa se enciende y revela un mapa dimensional.  
*Has obtenido el Mapa Etéreo.*

~ INVENTARIO += mapa_etereo
-> regresar_portal

=== aeris_mercader ===
El mercader flota ante ti y ofrece un extraño artefacto por un precio: un recuerdo.  
¿Le ofreces uno?

+ [Sí, entregas un recuerdo]
    -> aeris_mercader_ofrecer
+ [No, te alejas]
    -> regresar_portal

=== aeris_mercader_ofrecer ===
Olvidas el rostro de alguien querido, pero a cambio, obtienes un **Cubo de Gravedad**.  
~ INVENTARIO += cubo_gravedad
-> regresar_portal

=== portal_oscuro ===
Has cruzado al **Yermo de Ceniza**, un mundo arrasado por antiguas guerras dimensionales.  
Ruinas sepultadas y ecos de almas susurran entre el polvo.

Una **figura encapuchada** aparece junto a un **altar de cristal agrietado**.

+ [Hablar con la figura]
    -> yermo_figura
+ [Examinar el altar]
    -> yermo_altar

=== yermo_figura ===
La figura te ofrece una **Brújula de Sombras** si aceptas llevar su marca.  
+ [Aceptar la marca]
    ~ INVENTARIO += brujula_sombras
    ~ tiene_marca = true
    -> regresar_portal
+ [Rechazar la marca]
    -> regresar_portal

=== yermo_altar ===
Encuentras una piedra de eco: al tocarla, escuchas tu propia voz diciendo: *"El ciclo debe cerrarse."*  
Nada más ocurre... por ahora.  
-> regresar_portal

=== portal_verde ===
El mundo de la **Mente Prisma** se expande como un laberinto fractal. Aquí, el pensamiento moldea la realidad.  
Un **niño sin ojos** te pide ayuda para encontrar su "centro" y un **espejo flotante** muestra posibles versiones de ti mismo.

+ [Ayudar al niño]
    -> mente_ayuda_nino
+ [Mirar el espejo]
    -> mente_mirar_espejo

=== mente_ayuda_nino ===
El niño guía tu mente a una cámara donde encuentras una **Llama del Origen**.

~ INVENTARIO += llama_origen
-> regresar_portal

=== mente_mirar_espejo ===
Una versión tuya intenta hablar, pero se disuelve en humo. Solo queda una sensación de advertencia.  
-> regresar_portal

=== regresar_portal ===
Has completado tu exploración del mundo.  
¿Quieres visitar otro portal o ir al núcleo central del multiverso?

+ [Visitar otro portal]
    -> start
+ [Ir al Núcleo Central]
    -> nucleo_central

=== nucleo_central ===
Has regresado a la Cámara de los Umbrales. Todos los portales se cierran.  
En el centro, una esfera de energía te examina. Te pregunta:

*“¿Estás preparado para unir los fragmentos del multiverso?”*

+ [Sí, usar objetos reunidos]
    -> unir_fragmentos
+ [No, abandonar este lugar]
    -> fin_abandono

=== unir_fragmentos ===
{INVENTARIO ? mapa_etereo:
    El Mapa Etéreo revela las conexiones ocultas...
}
{INVENTARIO ? cubo_gravedad:
    El Cubo de Gravedad estabiliza las fisuras...
}
{INVENTARIO ? brujula_sombras:
    La Brújula de Sombras alinea las corrientes oscuras...
}
{INVENTARIO ? llama_origen:
    La Llama del Origen reaviva el corazón del tiempo...
}

{INVENTARIO ? mapa_etereo and INVENTARIO ? cubo_gravedad and INVENTARIO ? brujula_sombras and INVENTARIO ? llama_origen:
    La esfera se abre. Has restaurado el equilibrio entre mundos.
    -> fin_equilibrio
- else:
    Sin todos los fragmentos, la esfera se cierra. El multiverso colapsa lentamente.
    -> fin_fracaso
}

=== fin_equilibrio ===
Has unido los mundos. Eres ahora el Vínculo Eterno entre realidades.  
Pero con gran poder... vienen infinitas decisiones.

-> DONE

=== fin_fracaso ===
Los mundos comienzan a fragmentarse. En un último destello, comprendes lo que faltó.  
Todo se desvanece.

-> DONE
=== fin_abandono ===
Decidiste no intervenir. Los mundos seguirán su curso caótico, más allá de tu alcance.

-> DONE
