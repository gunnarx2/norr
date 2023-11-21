import { RefObject, useEffect, useRef } from 'react';

export type UseEventListenerReturn = void;

export type UseEventListenerParameters<T, L, E> = {
  type: T;
  listener: (event: L) => void;
  target?: E;
  options?: boolean | AddEventListenerOptions;
};

function useEventListener<K extends keyof MediaQueryListEventMap>({
  type,
  listener,
  target,
  options,
}: UseEventListenerParameters<
  K,
  MediaQueryListEventMap[K],
  RefObject<MediaQueryList>
>): UseEventListenerReturn;

function useEventListener<K extends keyof WindowEventMap>({
  type,
  listener,
  target,
  options,
}: UseEventListenerParameters<
  K,
  WindowEventMap[K],
  undefined
>): UseEventListenerReturn;

function useEventListener<
  K extends keyof HTMLElementEventMap,
  T extends HTMLElement = HTMLDivElement,
>({
  type,
  listener,
  target,
  options,
}: UseEventListenerParameters<
  K,
  HTMLElementEventMap[K],
  RefObject<T>
>): UseEventListenerReturn;

function useEventListener<K extends keyof DocumentEventMap>({
  type,
  listener,
  target,
  options,
}: UseEventListenerParameters<
  K,
  DocumentEventMap[K],
  RefObject<Document>
>): UseEventListenerReturn;

function useEventListener<
  KW extends keyof WindowEventMap,
  KH extends keyof HTMLElementEventMap,
  KM extends keyof MediaQueryListEventMap,
  T extends HTMLElement | MediaQueryList | void = void,
>({
  type,
  listener,
  target,
  options,
}: UseEventListenerParameters<
  KW | KH | KM,
  | WindowEventMap[KW]
  | HTMLElementEventMap[KH]
  | MediaQueryListEventMap[KM]
  | Event,
  RefObject<T> | undefined
>): UseEventListenerReturn {
  const savedListener = useRef(listener);

  useEffect(() => {
    savedListener.current = listener;
  }, [listener]);

  useEffect(() => {
    const getTarget: T | Window = target?.current ?? window;
    if (!(getTarget && getTarget.addEventListener)) return;

    const getListener: typeof listener = (event) => {
      return savedListener.current(event);
    };
    getTarget.addEventListener(type, getListener, options);

    return () => {
      getTarget.removeEventListener(type, getListener, options);
    };
  }, [type, target, options]);
}

export { useEventListener };
