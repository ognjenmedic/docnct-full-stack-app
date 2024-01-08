package com.docnct.config;

import com.docnct.service.SecretsManagerService;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
import org.springframework.jdbc.datasource.DriverManagerDataSource;
import javax.sql.DataSource;
import java.util.Map;

@Configuration
@Profile("prod")
public class DatabaseConfig {

    private final SecretsManagerService secretsManagerService;

    public DatabaseConfig(SecretsManagerService secretsManagerService) {
        this.secretsManagerService = secretsManagerService;
    }

    @Bean
    public DataSource dataSource() {
        Map<String, String> dbCredentials = secretsManagerService.getSecrets("prod/docnct/mysql");
        DriverManagerDataSource dataSource = new DriverManagerDataSource();

        String jdbcUrl = "jdbc:mysql://" + dbCredentials.get("url") +
                ":3306/docnct_db?useSSL=false";
        dataSource.setDriverClassName("com.mysql.cj.jdbc.Driver");
        dataSource.setUrl(jdbcUrl);
        dataSource.setUsername(dbCredentials.get("username"));
        dataSource.setPassword(dbCredentials.get("password"));
        return dataSource;
    }

}
