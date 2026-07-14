export class ServerConfigurationError extends Error {
  readonly variable: string
  readonly status = 503

  constructor(variable: string, message?: string) {
    super(message ?? `The server is missing the ${variable} environment variable.`)
    this.name = 'ServerConfigurationError'
    this.variable = variable
  }
}

export function getRequiredServerEnv(variable: string, message?: string) {
  const value = process.env[variable]

  if (!value || value.trim().length === 0) {
    throw new ServerConfigurationError(variable, message)
  }

  return value
}

export function isServerConfigurationError(error: unknown): error is ServerConfigurationError {
  return error instanceof ServerConfigurationError
}
