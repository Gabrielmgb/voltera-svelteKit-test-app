/**
 * Mapeamento de códigos de países para nomes em português
 */
const COUNTRY_NAMES = {
  US: "Estados Unidos",
  BR: "Brasil",
  GB: "Reino Unido",
  FR: "França",
  DE: "Alemanha",
  IT: "Itália",
  ES: "Espanha",
  PT: "Portugal",
  MX: "México",
  AR: "Argentina",
  CA: "Canadá",
  AU: "Austrália",
  IN: "Índia",
  CN: "China",
  JP: "Japão",
  RU: "Rússia",
}

/**
 * Mapeamento de gêneros para português
 */
const GENDER_NAMES = {
  male: "Masculino",
  female: "Feminino",
}

/**
 * Formata lista de países com probabilidades
 */
export function formatCountries(countries) {
  if (!countries || countries.length === 0) {
    return "Origem não identificada"
  }

  return countries
    .slice(0, 3)
    .map((country) => {
      const countryName = COUNTRY_NAMES[country.country_id] || country.country_id
      const probability = Math.round(country.probability * 100)
      return `${countryName} (${probability}%)`
    })
    .join(", ")
}

/**
 * Formata informações de gênero
 */
export function formatGender(gender) {
  if (!gender || !gender.gender) {
    return "Gênero não identificado"
  }

  const genderName = GENDER_NAMES[gender.gender] || gender.gender
  const probability = Math.round(gender.probability * 100)

  return `${genderName} (${probability}% de certeza)`
}
