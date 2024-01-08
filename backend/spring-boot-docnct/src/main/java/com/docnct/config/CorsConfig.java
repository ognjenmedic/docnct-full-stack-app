    package com.docnct.config;

    import org.springframework.context.annotation.Bean;
    import org.springframework.context.annotation.Configuration;
    import org.springframework.context.annotation.Profile;
    import org.springframework.web.servlet.config.annotation.CorsRegistry;
    import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

    @Configuration
    public class CorsConfig {

        @Bean
        @Profile("dev")
        public WebMvcConfigurer devCorsConfigurer() {
            return new WebMvcConfigurer() {
                @Override
                public void addCorsMappings(CorsRegistry registry) {
                    registry.addMapping("/**").allowedOrigins("http://localhost:4200");
                }
            };
        }

        @Bean
        @Profile("prod")
        public WebMvcConfigurer prodCorsConfigurer() {
            return new WebMvcConfigurer() {
                @Override
                public void addCorsMappings(CorsRegistry registry) {
                    registry.addMapping("/**").allowedOrigins("http://54.197.133.211");
                }
            };
        }
    }
