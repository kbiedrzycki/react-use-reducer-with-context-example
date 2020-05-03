function parseReactAppEnvironment (environmentVariables: NodeJS.ProcessEnv): Record<string, string | undefined> {
  return Object.keys(environmentVariables).reduce(
    (variables, currentVariableName) => {
      const variableValue = environmentVariables[currentVariableName]
      const variableName = currentVariableName.replace('REACT_APP_', '')

      return { ...variables, [variableName]: variableValue }
    },
    {},
  )
}

export const env = parseReactAppEnvironment(process.env)
