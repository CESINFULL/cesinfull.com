# Metodología

La metodología que adoptamos para el desarrollo del IX CESINF, y que comprobamos que fue efectiva, fue la siguiente:

## Reuniones
Cada semana se hacía una reunión breve en la que se discutía el progreso que se llevaba, las dificultades encontradas, los errores a solucionar, y las próximas características que teníamos que implementar. Además, en esta reunión se acordaba una sesión de programación en grupo semanal, en la que nos conectábamos a Discord y todos trabajábamos unas 3~4 horas en la web.

## Kanban, issues, y ramas
Para las features y bugfixes del programa, creamos Issues en GitHub, las cuales asociámos a un proyecto Kanban de GitHub, y a una rama del proyecto. Así podemos ver las cosas pendientes por hacer (en los issues), el estado del desarrollo de la característica (en el kanban), y el código asociado (en la rama asociada). Los estados del Kanban representan lo siguiente:

### TODO
Lo que queda por hacer y no se ha iniciado su desarrollo.

### In progress
Las actividades en este estado están siendo activamente desarrolladas. El desarrollador que tiene asignada esta actividad tiene el control exclusivo de la feature y la rama, y otros programadores NO deben tocar la rama o intentar desarrollar la actividad para evitar conflictos de rama o trabajo redundante con 2 personas haciendo lo mismo.

Si una actividad está más de 3 días "In progress" sin causa justificada, se considera que el programador ha acaparado injustificadamente el desarrollo de la característica. Por tanto, se le des-asigna la actividad, se vuelve a trasladar al TODO, y se apunta como una incidencia.

### Waiting for approval
La actividad en este estado están acabadas y pendientes de revisión. Si se determinan que requieren cambios se vuelve a mover a "in progress".

### Done
Las actividades en este estado están completamente acabadas. Una vez aquí, la actividad nunca puede volver atrás. El issue se cierra, y la rama se mergea y borra.

## Programación en ramas
El desarrollo del proyecto fue dividido en ramas. El bucle del desarrollo de una feature o un bugfix era el siguiente:

1. Mirar en el kanban una actividad pendiente de desarrollo.
2. Asignarse a sí mismo el desarrollo de la actividad, y moverlo a "In progress".
3. Crear una rama asociada al issue.
4. Hacer y probar el código.
5. Hacer una pull request para mergear el código, y mover la actividad a "Waiting for approval".
6. Una vez se aprueba la pull request, se mueve a "Done", se cierra el issue, y se borra la rama.
