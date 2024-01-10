package com.docnct.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import com.amazonaws.services.secretsmanager.AWSSecretsManager;
import com.amazonaws.services.secretsmanager.AWSSecretsManagerClientBuilder;
import com.amazonaws.services.secretsmanager.model.GetSecretValueRequest;
import com.amazonaws.services.secretsmanager.model.GetSecretValueResult;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.stereotype.Service;
import java.io.IOException;
import java.io.InputStream;
import java.nio.ByteBuffer;
import java.util.Base64;
import java.util.Map;

@Service
public class SecretsManagerService {
    private final Logger logger = LoggerFactory.getLogger(SecretsManagerService.class);

    private final AWSSecretsManager secretsManagerClient;
    private final ObjectMapper objectMapper;

    public SecretsManagerService() {
        this.secretsManagerClient = AWSSecretsManagerClientBuilder.standard().build();
        this.objectMapper = new ObjectMapper();
    }

    public Map<String, String> getSecrets(String secretName) {
        logger.info("Fetching secret for: {}", secretName);
        GetSecretValueRequest request = new GetSecretValueRequest().withSecretId(secretName);

        try {
            String secretString = secretsManagerClient.getSecretValue(request).getSecretString();
            logger.info("Successfully retrieved secret for: {}", secretName);
            return objectMapper.readValue(secretString, Map.class);
        } catch (IOException e) {
            logger.error("Failed to parse secret string for: {}", secretName, e);
            throw new RuntimeException("Failed to parse secret string", e);
        } catch (Exception e) {
            logger.error("Error retrieving secret for: {}", secretName, e);
            throw new RuntimeException("Error retrieving secret", e);
        }
    }

    public String getStringSecret(String secretName) {
        logger.info("Fetching string secret for: {}", secretName);
        GetSecretValueRequest request = new GetSecretValueRequest().withSecretId(secretName);

        try {
            GetSecretValueResult result = secretsManagerClient.getSecretValue(request);
            return result.getSecretString();
        } catch (Exception e) {
            logger.error("Error retrieving string secret for: {}", secretName, e);
            throw new RuntimeException("Error retrieving string secret", e);
        }
    }

    public byte[] getBinarySecret(String secretName) {
        logger.info("Fetching binary secret for: {}", secretName);
        GetSecretValueRequest request = new GetSecretValueRequest().withSecretId(secretName);
        try {
            GetSecretValueResult result = secretsManagerClient.getSecretValue(request);
            ByteBuffer binarySecretData = result.getSecretBinary();
            if (binarySecretData != null) {
                logger.info("Successfully retrieved binary secret for: {}", secretName);
                byte[] binaryDataArray = new byte[binarySecretData.remaining()];
                binarySecretData.get(binaryDataArray);
                return binaryDataArray; // No need to decode as it's already a byte array
            } else {
                logger.error("No binary secret found for: {}", secretName);
                throw new RuntimeException("No binary secret found");
            }
        } catch (Exception e) {
            logger.error("Error retrieving binary secret for: {}", secretName, e);
            throw new RuntimeException("Error retrieving binary secret", e);
        }
    }

}
