// constants, to avoid typos between choices (strings in array) & steps (keys in steps)
const Q_NOTICKET = "noTicketQuestion"
const Q_DURATION = "duration"
const Q_STAYFORONEDAY = "stayForOneDay"
const Q_STAYFORONEWEEK = "stayForOneWeek"
const Q_STAYFORONEMONTH = "stayForOneMonth"
const Q_WITHOUTRETURN = "WithoutReturn"
const Q_WITHRETURN = "withReturn"
const T_NOTICKET = "noTicket"
const T_SHORTTRIPTICKET = "shortTripTicket"
const T_SINGLETICKET = "singleTicket"
const T_FULLDAYTICKET = "fullDayTicket"
const T_FOURSHORTTRIPTICKET = "fourShortTripTicket"
const T_FOURSINGLETICKET = "fourSingleTicket"
const T_ONEWEEKTICKETWITHBIKE = "OneWeekTicketWithBike"
const T_ONEWEEKTICKETWITHOUTBIKE = "OneWeekTicketWithoutBike"
const T_ONEMONTHTICKETTENAM = "OneMonthTicketTenAM"
const T_ONEMONTHTICKET = "OneMonthTicket"

const db = {
  [Q_NOTICKET]: {
    text: "Do you want to travel by train like a real Berliner?",
    buttonTextToStep: "Restart",
    choices: [T_NOTICKET, Q_DURATION],
  },
  [Q_DURATION]: {
    text: "How long will you stay in Berlin?",
    buttonTextToStep: "No",
    choices: [Q_STAYFORONEDAY, Q_STAYFORONEWEEK, Q_STAYFORONEMONTH],
  },
  [Q_STAYFORONEDAY]: {
    text: "Do you need a return?",
    buttonTextToStep: "One day",
    choices: [Q_WITHRETURN, Q_WITHOUTRETURN],
  },
  [Q_STAYFORONEWEEK]: {
    text: "Do you have a bike on your trip?",
    buttonTextToStep: "One week",
    choices: [T_ONEWEEKTICKETWITHBIKE, T_ONEWEEKTICKETWITHOUTBIKE],
  },
  [Q_STAYFORONEMONTH]: {
    text: "Do you want to travel before 10am?",
    buttonTextToStep: "More than two weeks",
    choices: [T_ONEMONTHTICKETTENAM, T_ONEMONTHTICKET],
  },
  [Q_WITHOUTRETURN]: {
    text: "Duration of your trip?",
    buttonTextToStep: "No",
    choices: [T_SHORTTRIPTICKET, T_SINGLETICKET],
  },
  [Q_WITHRETURN]: {
    text: "Duration of each journey?",
    buttonTextToStep: "Yes",
    choices: [T_FOURSHORTTRIPTICKET, T_FOURSINGLETICKET, T_FULLDAYTICKET],
  },
  [T_NOTICKET]: {
    text: "Real Berliners don't buy tickets!",
    buttonTextToStep: "Yes",
    choices: [Q_NOTICKET],
  },
  [T_SHORTTRIPTICKET]: {
    text: "Our Recommendation: Short trip ticket",
    buttonTextToStep: "Less than 20 min",
    choices: [Q_NOTICKET],
  },
  [T_SINGLETICKET]: {
    text: "Our Recommendation: Single ticket",
    buttonTextToStep: "less than 2 hours",
    choices: [Q_NOTICKET],
  },
  [T_FULLDAYTICKET]: {
    text: "Our Recommendation: Full day ticket",
    buttonTextToStep: "more than 2 hours",
    choices: [Q_NOTICKET],
  },
  [T_FOURSHORTTRIPTICKET]: {
    text: "Our Recommendation: Four Short Trip ticket",
    buttonTextToStep: "less than 20 min",
    choices: [Q_NOTICKET],
  },
  [T_FOURSINGLETICKET]: {
    text: "Our Recommendation: Four Single Trip ticket",
    buttonTextToStep: "less than 2 hours",
    choices: [Q_NOTICKET],
  },
  [T_ONEWEEKTICKETWITHBIKE]: {
    text: "Our Recommendation: One week ticket with bike",
    buttonTextToStep: "Yes",
    choices: [Q_NOTICKET],
  },
  [T_ONEWEEKTICKETWITHOUTBIKE]: {
    text: "Our Recommendation: One week ticket without bike",
    buttonTextToStep: "No",
    choices: [Q_NOTICKET],
  },
  [T_ONEMONTHTICKETTENAM]: {
    text: "Our Recommendation: One month ticket after 10am",
    buttonTextToStep: "No",
    choices: [Q_NOTICKET],
  },
  [T_ONEMONTHTICKET]: {
    text: "Our Recommendation: One month ticket",
    buttonTextToStep: "Yes",
    choices: [Q_NOTICKET],
  },
}

export { db, Q_NOTICKET }
