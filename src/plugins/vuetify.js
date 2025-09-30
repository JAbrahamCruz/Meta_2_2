// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

export default createVuetify({
  theme: {
    defaultTheme: 'light', // o 'dark', como prefieras por defecto
    themes: {
      // light: {
      //   colors: {
      //     primary: '#651c32',     // Vino oscuro (tu marca principal)
      //     secondary: '#d1bca1',   // Beige (color complementario)
      //     background: '#f5f5f5',  // Fondo general
      //     surface: '#ffffff',     // Tarjetas, navbar, diálogos
      //     error: '#FF5252',       // Errores
      //     success: '#4CAF50',     // Éxitos
      //     warning: '#FB8C00',     // Advertencias
      //     info: '#2196F3',        // Información
      //   },
      // },
      // dark: {
      //   colors: {
      //     primary: '#d1bca1',     // Beige como color principal en dark
      //     secondary: '#651c32',   // Vino oscuro como complemento
      //     background: '#121212',  // Fondo general oscuro
      //     surface: '#1e1e1e',     // Superficies (tarjetas, navbar)
      //     error: '#FF867C',       // Errores (ligeramente más claros en dark)
      //     success: '#66BB6A',
      //     warning: '#FFB74D',
      //     info: '#64B5F6',
      //   },
      // },
    },
  },
})