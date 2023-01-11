package com.bitc.springserver.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class TestController {

    @RequestMapping("test")
    public List<String> test() throws Exception {
        List<String> result = new ArrayList<>();
        result.add("안녕하세요");
        result.add("리액트 연동 테스트 입니다.");

        return result;
    }
}
