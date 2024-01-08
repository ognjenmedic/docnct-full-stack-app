package com.docnct.service;

import com.amazonaws.services.secretsmanager.AWSSecretsManager;
import com.amazonaws.services.secretsmanager.AWSSecretsManagerClientBuilder;
import com.amazonaws.services.secretsmanager.model.GetSecretValueRequest;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.stereotype.Service;
import java.io.IOException;
import java.util.Map;

@Service
public class SecretsManagerService {

    private final AWSSecretsManager secretsManagerClient;
    private final ObjectMapper objectMapper;

    public SecretsManagerService() {
        this.secretsManagerClient = AWSSecretsManagerClientBuilder.standard().build();
        this.objectMapper = new ObjectMapper();
    }

    public Map<String, String> getSecrets(String secretName) {
        GetSecretValueRequest request = new GetSecretValueRequest().withSecretId(secretName);
        String secretString = secretsManagerClient.getSecretValue(request).getSecretString();

        try {
            return objectMapper.readValue(secretString, Map.class);
        } catch (IOException e) {
            throw new RuntimeException("Failed to parse secret string", e);
        }
    }
}
