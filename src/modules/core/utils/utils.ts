import { InfiniteData, SafeAny } from '@core/types/shared-types';
// import { isChakraTheme, mergeThemeOverride } from '@chakra-ui/react';
// import { mergeThemeOverride } from "@chakra-ui/theme-tools";
// import { pipe } from 'framer-motion';
import { isFunction, isNumber, isNil, omitBy } from 'lodash';

import { ComponentType } from 'react';
// export const createExtendTheme = (theme: Record<string, any>) => {
//   return function extendTheme(
//     ...extensions: Array<
//       | Record<string, any>
//       | ((theme: Record<string, any>) => Record<string, any>)
//     >
//   ): Record<string, any> {
//     let overrides = [...extensions];
//     let activeTheme = extensions[extensions.length - 1];

//     if (
//       isChakraTheme(activeTheme) &&
//       // this ensures backward compatibility
//       // previously only `extendTheme(override, activeTheme?)` was allowed
//       overrides.length > 1
//     ) {
//       overrides = overrides.slice(0, overrides.length - 1);
//     } else {
//       activeTheme = theme;
//     }

//     return pipe(
//       ...overrides.map(
//         (extension) => (prevTheme: any) =>
//           isFunction(extension)
//             ? (extension as any)(prevTheme)
//             : mergeThemeOverride(prevTheme, extension)
//       )
//     )(activeTheme);
//   };
// };

type Metadata = {
  tags: string[];
  description: string;
};
/**
 * This component is used to attach metadata to a component
 * this helps us to generate the icon playground
 */
export const wrapIconWithMeta = (
  Comp: ComponentType<any>,
  metadata: Metadata
) => {
  (Comp as any).metadata = metadata;

  return Comp;
};

const isPixelValue = (value: string): boolean => /^\d+(px)?$/.test(value);
const isRemValue = (value: string): boolean => /^\d+(rem)?$/.test(value);

export const px = (value: string | number): string | undefined => {
  if (isNumber(value)) {
    return `${value}px`;
  }

  if (typeof value === 'string') {
    if (isPixelValue(value)) {
      return value.endsWith('px') ? value : `${value}px`;
    }

    if (isRemValue(value)) {
      return value.endsWith('rem') ? value : `${value}rem`;
    }
  }

  return undefined;
};

export const arrToDict = <T>(
  arr: T[],
  key: keyof T | ((d: T) => string) | 'index'
) => {
  return arr.reduce((acc, curr, idx) => {
    const resolvedKey =
      key === 'index'
        ? idx + ''
        : isFunction(key)
        ? key(curr)
        : (curr[key] as SafeAny);

    acc[resolvedKey] = curr;
    return acc;
  }, {} as Record<string, T>);
};

export const bool = (value: SafeAny) => {
  if (!value) {
    return false;
  }
  const isTrue =
    value === 'true' || value === '1' || value === true || value === 1;

  return isTrue;
};

export const toArr = (val: SafeAny) => {
  if (isNil(val)) return [];
  if (!val) return [];
  if (Array.isArray(val)) return val;
  return [val];
};

export const omitNil = (value: SafeAny) => omitBy(value, isNil);

export const secureJsonParse = <T extends SafeAny>(
  json: SafeAny,
  fallback: SafeAny = null
) => {
  try {
    return JSON.parse(json) as T;
  } catch (error) {
    return fallback;
  }
};

export const forceStEq = (a: string, b: string) => {
  if (!a || !b) return false;
  return a.toLocaleLowerCase() === b.toLocaleLowerCase();
};

export const flatternInfiniteResult = <
  Paginated extends InfiniteData<SafeAny> | undefined,
  Key extends keyof Exclude<Paginated, undefined>['pages'][0]
>(
  data: Paginated,
  path: Key
): Paginated extends undefined
  ? []
  : Exclude<Exclude<Paginated, undefined>['pages'][0][Key], undefined> => {
  if (!data) {
    return [] as SafeAny;
  }
  return ((data ?? []) as any)?.pages.reduce(
    (acc: SafeAny[], curr: SafeAny) => {
      const value = curr[path];
      return acc.concat(Array.isArray(value) ? value : []);
    },
    []
  ) as SafeAny;
};

export const uniObject = (obj: SafeAny, depth = 2) => {
  const plain = (obj: SafeAny, level: number): string => {
    if (level === 0) return '';
    if (isNil(obj)) return '';
    if (isFunction(obj)) return '';
    if (typeof obj === 'string') return obj;
    if (typeof obj === 'number') return String(obj);
    if (typeof obj === 'boolean') return String(obj);
    if (Array.isArray(obj))
      return obj.map((obj) => plain(obj, level)).join('-');
    if (typeof obj === 'object') {
      return Object.values(obj)
        .map((obj) => {
          return plain(obj, level);
        })
        .join('-');
    }
    level--;
    return '';
  };

  return plain(obj, depth);
};

export const uniArr = (arr: SafeAny[]) => {
  const acum = new Map();
  arr.forEach((el) => {
    const key = uniObject(el);
    if (!acum.has(key)) {
      acum.set(key, el);
    }
  });
  return Array.from(acum.values());
};

export const unique = <T>(arr: T[], key: keyof T) => {
  if (!key) {
    return Array.from(new Set(arr));
  }
  return [...new Map(arr.map((item) => [item[key], item])).values()];
};
