package com.docnct;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication(scanBasePackages = "com.docnct")
@EntityScan(basePackages = "com.docnct.entity")
@EnableJpaRepositories(basePackages = "com.docnct.repository")
public class SpringBootDocnctApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringBootDocnctApplication.class, args);
	}

}
