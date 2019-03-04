import moment from "moment"

export const formatDate = (date, lang) => {
  if (lang) moment().locale(lang)

  moment().format(date, "DD/MM/YYYY")
}
