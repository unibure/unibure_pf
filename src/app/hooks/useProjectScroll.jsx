"use client";
import { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";

const DEFAULT_OFFSET = ["0% 100%", "0% 50%"]; //프로젝트 카드 스크롤 오프셋
const DEFAULT_WIDTH_RANGE = ["50%", "100%"]; // 프로젝트 카드 너비 범위

export function useProjectScroll(cardCount, offset = DEFAULT_OFFSET) { 
    //cardCount 만큼의 ref 배열 생성
    const cardRefs = Array.from({ length: cardCount }, () => useRef(null));

    //cardRefs 배열을 순회하면서 각 ref에 대한 scrollYProgress 값을 계산
    const scrollProgress = cardRefs.map((ref) => 
        useScroll({
            target: ref,
            offset,
        }).scrollYProgress
    );
    //scrollYProgress 값을 0~1 범위로 변환하여 프로젝트 카드 너비 범위로 변환
    const cardWidths = scrollProgress.map((progress) =>
        useTransform(progress, [0, 1], DEFAULT_WIDTH_RANGE)
    );

    const cardOpacity = scrollProgress.map((progress) =>
      useTransform(progress, [0,0.5, 1], [0, 0.5,1.0])
    );

    return { cardRefs, cardWidths ,cardOpacity };
}