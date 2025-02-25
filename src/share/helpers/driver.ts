import { driver } from "driver.js";
import "driver.js/dist/driver.css";

export function driverWelcome() {
  const driverObj = driver({
    showProgress: true,
    steps: [
      {
        element:
          window.innerWidth < 1000 ? "#fiona-logo-header" : "#fiona-logo-aside",
        popover: {
          title: "Bienvenid@ a EMMA",
          description:
            "Te dare un recorrido por toda la app, puedes salir del tour cuando tu quieras, Da clic aquí para volver al dashboard.",
          align: "start",
        },
      },
      {
        element: window.innerWidth < 1000 ? "#fiona-menu-mobile" : "aside ul",
        popover: {
          title: "Navegación",
          description:
            "Utiliza el ícono de menú hamburguesa para acceder a más opciones de navegación dentro de la app.",
          align: "start",
          onNextClick: () => {
            if (window.innerWidth < 1000) {
              driverObj.moveTo(4);
            } else {
              driverObj.moveNext();
            }
          },
        },
      },
      {
        element: "#fiona-profile-aside",
        popover: {
          title: "Perfil",
          description:
            "Ingresa aca para cambiar tu información de perfil y cerrar sesión",
          align: "start",
        },
      },
      {
        element: "#fiona-btn_movements",
        popover: {
          title: "Movimientos",
          description:
            "Para reportar un ingreso, un gasto o mover plata de una cuenta a otra dale clic aquí.",
          align: "start",
          onNextClick: () => {
            if (window.innerWidth < 1000) {
              driverObj.moveNext();
            } else {
              driverObj.moveTo(9);
            }
          },
        },
      },
      {
        element: "#fiona-menuBottom_home",
        popover: {
          title: "Ir al Home",
          description:
            "Selecciona esta opción para regresar al dashboard y revisar tu progreso.",
          align: "start",
        },
      },
      {
        element: "#fiona-menuBottom_accounts",
        popover: {
          title: "Cuentas",
          description:
            "Accede a la opción para gestionar y monitorear todas tus cuentas",
          align: "start",
        },
      },
      {
        element: "#fiona-menuBottom_moves",
        popover: {
          title: "Movimientos",
          description:
            "Agrega nuevos movimientos aquí: registra ingresos, gastos y realiza transferencias entre tus cuentas.",
          align: "start",
        },
      },
      {
        element: "#fiona-menuBottom_categories",
        popover: {
          title: "Categorias",
          description:
            "Aquí puedes segmentar los movimientos en categorías, facilitando su identificación de forma rápida y sencilla.",
          align: "start",
        },
      },
      {
        element: "#fiona-menuBottom_events",
        popover: {
          title: "Eventos",
          description:
            "Crea eventos para rastrear cuánto gastaste y cuánto ganaste en momentos específicos de tu vida.",
          align: "start",
        },
      },
      {
        element: "#fiona-btn_help",
        popover: {
          title: "Ayuda",
          description:
            "Para saber mas sobre cada sección de la aplicación dale clic a este icono.",
          align: "start",
        },
      },
    ],
    nextBtnText: "Siguiente →",
    prevBtnText: "← Atrás",
  });
  driverObj.drive();
  localStorage.setItem("fiona-doesntShow_help", "1");
}
export function driverDash() {
  driver({
    showProgress: true,
    steps: [
      {
        element: "#fiona-title_Dashboard",
        popover: {
          title: "Dashboard",
          description:
            "En esta sección podrás ver tu resumen del mes en curso y con tu moneda por defecto.",
          align: "start",
        },
      },
      {
        element: "#fiona-filter",
        popover: {
          title: "Filtros",
          description:
            "Has clic aquí para agregar filtros, como: cambiar la moneda, rango de fecha. Esto es util para ver como vas en el año o como te fue en un mes en especifico",
          align: "start",
        },
      },
      {
        element: "#fiona-card_balance",
        popover: {
          title: "Balance",
          description:
            "Aca veras con cuanta plata comenzaste el periodo, cuanto te ingreso, cuanto gastaste y con cuanto terminaste.",
          align: "start",
        },
      },
      {
        element: "#fiona-chart_incomes",
        popover: {
          title: "Gráfico Ingresos",
          description:
            "En esta parte veras un gráfico de torta para entender que fuente de ingreso aporta mas, dale clic al color para tener mas detalle",
          align: "start",
        },
      },
      {
        element: "#fiona-chart_expensives",
        popover: {
          title: "Gráfico Egresos",
          description:
            "En esta parte veras un gráfico de torta para entender que gasto impacta mas, dale clic al color para tener mas detalle",
          align: "start",
        },
      },
      {
        element: "#fiona-chart_balances",
        popover: {
          title: "Gráfico Balance",
          description:
            "En esta parte veras un gráfico de linea que mostrara tu balance dia dia, y entender si en que momentos aumenta y en que momentos disminuye",
          align: "start",
        },
      },
      {
        element: "#fiona-list_cash",
        popover: {
          title: "Listado",
          description:
            "Por ultimo, aca podrás ver en forma de listado el total por categoría, para saber mas dale clic a cada categoría para ver los movimientos",
          align: "start",
        },
      },
    ],
    nextBtnText: "Siguiente →",
    prevBtnText: "← Atrás",
  }).drive();
}

export function driverAccount() {
  driver({
    showProgress: true,
    steps: [
      {
        element: "#fiona-title_Cuentas",
        popover: {
          title: "Cuentas",
          description:
            "En esta sección podrás ver todas tus cuentas, se considera una cuenta todo lugar donde manejes dinero, ej: Efectivo, cuenta de ahorros, CDT, TC, etc.",
          align: "start",
        },
      },
      {
        element: "#fiona-card_balance",
        popover: {
          title: "Balance",
          description: "Aca veras tu balance de forma: mensual, anual y total.",
          align: "start",
        },
      },
      {
        element: "#fiona-search",
        popover: {
          title: "Buscador",
          description:
            "Aca puedes buscar una cuenta por su nombre, también ver las cuentas que están activas e inactivas",
          align: "start",
        },
      },
    ],
    nextBtnText: "Siguiente →",
    prevBtnText: "← Atrás",
  }).drive();
}

export function driverEvent() {
  driver({
    showProgress: true,
    steps: [
      {
        element: "#fiona-title_Eventos",
        popover: {
          title: "Eventos",
          description:
            "En esta sección podrás ver todas tus eventos, donde un evento se utiliza para saber cuanto te ingreso o cuanto te valió equis evento ej: paseo - 2023, aniversario - 2022",
          align: "start",
        },
      },
    ],
    nextBtnText: "Siguiente →",
    prevBtnText: "← Atrás",
  }).drive();
}

export function driverInvestment() {
  driver({
    showProgress: true,
    steps: [
      {
        element: "#fiona-title_Inversiones",
        popover: {
          title: "Inversiones",
          description:
            "En esta sección podrás ver todas tus inversiones, lleva seguimiento de todas ts inversiones, cuanto rendimientos ha generado y su valorización",
          align: "start",
        },
      },
    ],
    nextBtnText: "Siguiente →",
    prevBtnText: "← Atrás",
  }).drive();
}

export function driverHeritage() {
  driver({
    showProgress: true,
    steps: [
      {
        element: "#fiona-title_Patrimonio",
        popover: {
          title: "Patrimonio",
          description:
            "En esta sección podrás ver todas tus patrimonio por año y por moneda, El patrimonio es la suma de todas tus Inversiones, Efectivo, Muebles e Inmuebles, Créditos. Dale clic a cada tarjeta para ver mas información",
          align: "start",
        },
      },
    ],
    nextBtnText: "Siguiente →",
    prevBtnText: "← Atrás",
  }).drive();
}

export function driverBudget() {
  driver({
    showProgress: true,
    steps: [
      {
        element: "#fiona-title_Presupuestos",
        popover: {
          title: "Presupuestos",
          description:
            "En esta sección podrás ver todos los presupuestos creados por moneda y año, dale clic a cada presupuesto para ver el cumplimiento de cada categoría",
          align: "start",
        },
      },
    ],
    nextBtnText: "Siguiente →",
    prevBtnText: "← Atrás",
  }).drive();
}

export function driverCategory() {
  driver({
    showProgress: true,
    steps: [
      {
        element: "#fiona-title_Categorías",
        popover: {
          title: "Categorías",
          description:
            "En esta sección podrás administrar tus categorías donde una categoría es para segmentar tus ingresos o gastos.",
          align: "start",
        },
      },
      {
        element: "#fiona-search",
        popover: {
          title: "Buscador",
          description:
            "Aca puedes buscar una categoría por su nombre, también ver las categorías que están activas e inactivas",
          align: "start",
        },
      },
    ],
    nextBtnText: "Siguiente →",
    prevBtnText: "← Atrás",
  }).drive();
}

export function driverPayment() {
  driver({
    showProgress: true,
    steps: [
      {
        element: "#fiona-title_Pagos",
        popover: {
          title: "Pagos",
          description:
            "En esta sección podrás ver todos tus pagos automáticos, si tienes ingresos periódicos o facturas que se pagan mensualmente, aca podrás definir cuanto y cuando quieres que se haga ese movimiento.",
          align: "start",
        },
      },
    ],
    nextBtnText: "Siguiente →",
    prevBtnText: "← Atrás",
  }).drive();
}

export function driverTool() {
  driver({
    showProgress: true,
    steps: [
      {
        element: "#fiona-title_Herramientas",
        popover: {
          title: "Herramientas",
          description:
            "En esta sección es para ayudarte a tomar decisiones consientes y razonables.",
          align: "start",
        },
      },
      {
        element: "#fiona-canido",
        popover: {
          title: "Puedo gastarme?",
          description:
            "Pregúntame si puedes gastarte equis cantidad de dinero, esto te ayudara a saber que pasaría si te gastas ese dinero.",
          align: "start",
        },
      },
      {
        element: "#fiona-test_project",
        popover: {
          title: "Evaluación de inversión",
          description:
            "Evalúa si una inversión que piensas hacer se justifica o no.",
          align: "start",
        },
      },
    ],
    nextBtnText: "Siguiente →",
    prevBtnText: "← Atrás",
  }).drive();
}

export function driverMovement() {
  driver({
    showProgress: true,
    steps: [
      {
        element: "#fiona-field_type",
        popover: {
          title: "Tipo de movimiento",
          description:
            "Selecciona que tipo de movimiento que piensas realizar, <b>Ingreso: </b> indica que te entro dinero, <b>Egreso: </b> indica que gastaste dinero y <b>Transferencia: </b> es para mover el dinero de una cuenta a otra.",
          align: "start",
        },
      },
      {
        element: "#amount",
        popover: {
          title: "Monto",
          description: "indica cuanta plata fue que te gastaste o te ingreso",
          align: "start",
        },
      },
      {
        element: "#date_purchase",
        popover: {
          title: "Fecha del movimiento",
          description: "Cuando fue que se hizo ese movimiento.",
          align: "start",
        },
      },
      {
        element: "#event",
        popover: {
          title: "Evento",
          description:
            "Indica si el movimiento pertenece algún evento, este campo es opcional.",
          align: "start",
        },
      },
      {
        element: "#investment",
        popover: {
          title: "Inversión",
          description:
            "Indica si el movimiento pertenece alguna inversión, Si seleccionas una inversión indica si ese movimiento es porque fue un retiro/adición/reinversión, este campo es opcional.",
          align: "start",
        },
      },
      {
        element: "#description",
        popover: {
          title: "Descripciones",
          description:
            "Usa este campo es para poder acordarte el porque se hizo ese movimiento, este campo es opcional.",
          align: "start",
        },
      },
    ],
    nextBtnText: "Siguiente →",
    prevBtnText: "← Atrás",
  }).drive();
}

export function driverSupport() {
  driver({
    showProgress: true,
    steps: [
      {
        element: "#fiona-title_Soporte",
        popover: {
          title: "Soporte",
          description:
            "En esta sección es para comunicarte con el equipo de soporte.",
          align: "start",
        },
      },
      {
        element: "#fiona-getintouch",
        popover: {
          title: "Contactanos",
          description:
            "Usa este formulario para enviarnos cualquier inconveniente, felicitaciones, sugerencias, ayuda que necesites.",
          align: "start",
        },
      },
      {
        element: "#fiona-notes",
        popover: {
          title: "Nota",
          description:
            "Importante que tengas encuenta como nos comunicamos contigo, la seguridad es muy importante para todos!",
          align: "start",
        },
      },
    ],
    nextBtnText: "Siguiente →",
    prevBtnText: "← Atrás",
  }).drive();
}

export function driverListGroupExpensive() {
  driver({
    showProgress: true,
    steps: [
      {
        element: "#fiona-percentage_Gastos_Personales",
        popover: {
          title: "Porcentaje",
          description: `Este es el procentaje que corresponde a tus ingreso, es <b>importante</b> que tengas encuenta una relación <b>50 / 30 / 20</b>,
            donde el <b>50%</b> son tus <b>gastos fijos</b>, el <b>30%</b> son tus <b>gastos personales</b> y el <b>20%</b> son tus <b>ahorros</b>`,
          align: "start",
        },
      },
      {
        element: "#fiona-variation_Gastos_Personales",
        popover: {
          title: "Variación",
          description: `Esta es la variación que tuviste frente al perido pasado, para <b>los gastos una variación negativa</b> significa <b>un incremento</b> en los gasto y 
            <b>una positiva una reducción</b>, mientras que en <b>la utiilidad </b> si es <b>positiva incremento</b> y si fue negativa disminuyo`,
          align: "start",
        },
      },
    ],
    nextBtnText: "Siguiente →",
    prevBtnText: "← Atrás",
  }).drive();
}
