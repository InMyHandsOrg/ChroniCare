# Relacionado con User Story: US34 - Libro de Reclamaciones
Feature: Acceso al libro de reclamaciones digital

  Como usuario insatisfecho,
  Quiero acceder al libro de reclamaciones digital,
  Para expresar mis disconformidades.

  Scenario: Reclamación registrada correctamente
    Given que el usuario quiere hacer una reclamación
    When accede al formulario digital y lo completa correctamente
    Then el sistema registra la queja y muestra un mensaje de confirmación

  Scenario: Formulario incompleto o inválido
    Given que el usuario no completa todos los datos requeridos o no lo hace adecuadamente
    When intenta enviar la reclamación
    Then el sistema bloquea el envío y muestra: "Debe completar los campos requeridos antes de continuar"