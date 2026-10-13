export const validateBrowserRuntimeResult = ({ browser, variant, result, workerCount, errors }) => {
  const cell = `${browser}/${variant}`;
  if (errors.length > 0) throw new Error(`${cell}: browser errors:\n${errors.join('\n')}`);
  if (result?.error) throw new Error(`${cell}: ${result.error}`);
  if (!result?.shape) throw new Error(`${cell}: BRep shape is null`);

  if (variant === 'single') {
    if (result.memoryKind !== 'ArrayBuffer') {
      throw new Error(`${cell}: expected ArrayBuffer, got ${result.memoryKind}`);
    }
    return;
  }

  if (!result?.isolated) throw new Error(`${cell}: crossOriginIsolated is false`);
  if (result.memoryKind !== 'SharedArrayBuffer') {
    throw new Error(`${cell}: expected SharedArrayBuffer, got ${result.memoryKind}`);
  }
  if (workerCount < 1) throw new Error(`${cell}: no pthread Web Workers were observed`);
  if (!(result.poolThreads > 1)) throw new Error(`${cell}: OCCT thread pool did not exceed one thread`);
  if (!result.meshDone) throw new Error(`${cell}: parallel mesh did not finish`);
};
