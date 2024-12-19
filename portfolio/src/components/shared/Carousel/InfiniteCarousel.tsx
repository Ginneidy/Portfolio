"use client"

import { useEffect, useRef } from "react";

interface ICarouselProps {
    elements: React.ReactNode[];
}


export const InfiniteCarousel: React.FC<ICarouselProps> = (elements) => {

    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const scroller = scrollRef.current;

        function addAnimation() {
            console.log("scroller: ", scroller);

            if (!scroller) return;
            const innerScoller = scroller.querySelector('.scroll_inner');
            if (!innerScoller) return;

            if (innerScoller.getAttribute("data-cloned") === "true") return;

            const innerScrollerChildren = Array.from(innerScoller.children);
            console.log("innerScrollerChildren: ", innerScrollerChildren);

            if (!innerScrollerChildren) return;

            innerScrollerChildren.forEach(item => {
                const extendedElements = item.cloneNode(true) as HTMLElement;
                innerScoller.appendChild(extendedElements);
            })

            innerScoller.setAttribute("data-cloned", "true")
        }
        addAnimation();
    }, [])

    return (
        <div
            ref={scrollRef}
            className=" scroller" >
            <div className="scroll_inner flex flex-wrap gap-2 py-4 animate-infinite_scroll space-x-14">
                {elements.elements.map((element, index) => (
                    <div key={index} className="" >
                        {element}
                    </div>
                ))
                }
            </div>
        </div>
    )
}