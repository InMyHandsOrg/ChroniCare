# Relacionado con User Story: US45 - Políticas de privacidad
Feature: Acceso a la política de privacidad desde la plataforma

  Como usuario de la plataforma,
  Quiero que la política de privacidad esté siempre accesible y clara,
  Para saber cómo se manejarán mis datos.

  Scenario: Enlace funcional a la política de privacidad
    Given que el usuario está en la sección de configuración
    When pulsa el enlace “Política de Privacidad”
    Then se abre el documento completo y actualizado

  Scenario: Enlace roto a la política de privacidad
    Given que el enlace a la política está roto
    When el usuario intenta acceder
    Then el sistema muestra: "No se pudo cargar el documento. Intenta más tarde"