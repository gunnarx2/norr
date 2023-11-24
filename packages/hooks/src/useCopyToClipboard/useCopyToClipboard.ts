import { useCallback, useEffect, useRef, useState } from 'react';

export type UseCopyToClipboardReturn = {
  isCopied: boolean;
  copyValue: (text: string) => Promise<boolean>;
  copiedValue: string | null;
};

export type UseCopyToClipboardParameters = {
  duration?: number;
};

export const useCopyToClipboard = ({
  duration = 2500,
}: UseCopyToClipboardParameters = {}): UseCopyToClipboardReturn => {
  const timeout = useRef(0);
  const [isCopied, setIsCopied] = useState(false);
  const [copiedValue, setCopiedValue] =
    useState<UseCopyToClipboardReturn['copiedValue']>(null);

  useEffect(() => {
    return () => clearTimeout(timeout.current);
  }, []);

  const copyValue = useCallback(
    async (value: string) => {
      clearTimeout(timeout.current);

      if (!navigator?.clipboard) {
        console.warn('Clipboard not supported.');
        return false;
      }

      try {
        await navigator.clipboard.writeText(value);
        setCopiedValue(value);
        setIsCopied(true);
        timeout.current = window.setTimeout(() => setIsCopied(false), duration);

        return true;
      } catch (error) {
        console.warn('Failed to copy to clipboard.', error);
        setCopiedValue(null);

        return false;
      }
    },
    [duration]
  );

  return { isCopied, copyValue, copiedValue };
};
