import { Suspense } from "react";

const LazyComponent = (props) => {
    return (
        <Suspense fallback={<div>Loading</div>}>
            <props.lazyChildren />
        </Suspense>
    )
};

export default LazyComponent;