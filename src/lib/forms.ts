export async function submitNetlifyForm(
  formName: string,
  data: FormData,
  { files = false }: { files?: boolean } = {},
) {
  data.set('form-name', formName)

  const response = files
    ? await fetch('/__forms.html', { method: 'POST', body: data })
    : await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encodeForm(data),
      })

  if (!response.ok) {
    throw new Error('Could not send the form. Please email us directly.')
  }
}

function encodeForm(data: FormData) {
  const params = new URLSearchParams()
  for (const [key, value] of data.entries()) {
    if (typeof value === 'string') params.append(key, value)
  }
  return params.toString()
}
