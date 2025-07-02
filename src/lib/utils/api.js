/**
 * Faz requisição para APIs de informações sobre nomes
 */
export async function fetchNameInfo(name, fetch) {
  if (!name || name.trim() === "") {
    return { name: "", result: null }
  }

  try {
    const [nationalityResponse, genderResponse] = await Promise.all([
      fetch(`https://api.nationalize.io/?name=${encodeURIComponent(name)}`),
      fetch(`https://api.genderize.io/?name=${encodeURIComponent(name)}`),
    ])

    const nationalityData = nationalityResponse.ok ? await nationalityResponse.json() : null
    const genderData = genderResponse.ok ? await genderResponse.json() : null

    return {
      name,
      result: {
        nationality: nationalityData,
        gender: genderData,
      },
    }
  } catch (error) {
    return {
      name,
      result: {
        error: "Erro ao consultar a API. Tente novamente.",
      },
    }
  }
}
