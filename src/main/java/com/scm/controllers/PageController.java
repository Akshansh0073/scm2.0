package com.scm.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;


@Controller
public class PageController {

    @RequestMapping("/home")
    public String requestMethodName(Model model) {

        System.out.println("Home page handler");
        model.addAttribute("name", "Akshansh Sharma");
        model.addAttribute("Gender", "Male");
        model.addAttribute("age", 25);
        model.addAttribute("githubRepo", "https://github.com/Akshansh0073");
        return "home";
    }

    @RequestMapping("/about")
    public String aboutPage(Model model) {
        model.addAttribute("isLogin", false);
        System.out.println("About page handler");
        return "about";
    }

    @RequestMapping("/service")
    public String servicePage() {
        System.out.println("Service page handler");
        return "service";
    }

}
