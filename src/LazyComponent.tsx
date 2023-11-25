import {lazy, Suspense} from 'react';

const LazyImage = lazy(async () => {
    const module = await import('./lazyImage/PeterGriffin.tsx');
    return {default: module.PeterGriffin}
})

export const LazyComponent = () => (
    <Suspense fallback={"loading..."}>
        <LazyImage />
    </Suspense>
)