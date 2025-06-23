# Relacionado con User Story: US46 - Tiempo de carga
Feature: Tiempo de carga óptimo en la aplicación

  Como usuario de la plataforma,
  Quiero que la app cargue completamente en menos de 2 segundos,
  Para no perder tiempo.

  Scenario: Carga exitosa en menos de 2 segundos
    Given que el usuario abre la app
    When se inicia en condiciones normales de red
    Then la app carga por completo en menos de 2 segundos

  Scenario: Carga lenta por sobrecarga del servidor
    Given que el servidor está sobrecargado
    When el usuario accede a la app
    Then esta demora más de 2 segundos y muestra un mensaje de carga prolongada