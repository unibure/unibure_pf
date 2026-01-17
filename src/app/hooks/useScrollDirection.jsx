"use client";
import { useState, useEffect } from "react";

export function useScrollDirection() { 
    const [scrollDirection, setScrollDirection] = useState("down"); //스크롤 방향 상태
    const [lastScrollY, setLastScrollY] = useState(0); //마지막 스크롤 위치 상태

    useEffect(() => { 
        //handle scroll event를 생성
        const handleScroll = () => { 
            //현재 윈도우 스크롤 위치를 가져와서
            const currentScrollY = window.scrollY;
            // 이전스크롤 위치와 비교해서 이전스크롤 위치보다 현재 스크롤 위치가 크면 "down" 작으면 "up" 설정
            setScrollDirection(currentScrollY > lastScrollY ? "down" : "up");
            //lastScrollY 상태를 현재 스크롤 위치값으로 업데이트한다.
            setLastScrollY(currentScrollY);
        }
        // 생성한 이벤트 실행
        window.addEventListener("scroll", handleScroll, {passive: true}); //passive: true는 성능 최적화 옵션
        //이벤트 실행 후 이벤트 리스너를 제거한다.
        return () => window.removeEventListener("scroll", handleScroll);
    },[lastScrollY])
    //스크롤 이벤트 핸들러 함수 정의
    return scrollDirection;
}
