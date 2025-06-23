# Relacionado con User Story: US31 - Redes Sociales
Feature: Redirección a redes sociales desde la plataforma

  Como usuario de la plataforma,
  Quiero seguir a la empresa en sus redes sociales,
  Para estar al tanto de sus noticias y actualizaciones.

  Scenario: Redirección correcta a perfil oficial
    Given que el usuario desea seguir las redes sociales de la empresa
    When hace clic en un ícono de red social visible en la aplicación
    Then es redirigido correctamente al perfil oficial de la empresa en esa red

  Scenario: Red social no configurada
    Given que el usuario desea seguir las redes sociales de la empresa
    And la red social seleccionada no está configurada en el sistema
    When hace clic en el ícono correspondiente
    Then se muestra un mensaje de error o no ocurre ninguna acción