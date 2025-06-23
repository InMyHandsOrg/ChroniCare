 Relacionado con User Story: US33 - Recuperar contraseña
Feature: Recuperación de contraseña desde la plataforma

  Como usuario de la plataforma,
  Quiero tener la opción de recuperar mi contraseña de manera sencilla,
  Para asegurarme de poder acceder a mi cuenta incluso si la olvido.

  Scenario: Envío de enlace de restablecimiento al correo válido
    Given que el usuario ha olvidado su contraseña
    When ingresa su correo en la pantalla de recuperación
    Then el sistema envía un correo con un enlace para restablecerla

  Scenario: Correo no registrado
    Given que el usuario ingresa un correo no registrado
    When solicita recuperación de contraseña
    Then el sistema muestra: "Este correo no está vinculado a ninguna cuenta"