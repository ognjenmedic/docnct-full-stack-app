package com.docnct.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.core.io.InputStreamResource;
import org.springframework.core.io.Resource;
import org.springframework.stereotype.Service;
import javax.net.ssl.SSLContext;
import java.io.ByteArrayInputStream;
import java.security.KeyStore;
import java.security.SecureRandom;
import javax.net.ssl.HttpsURLConnection;

@Service
public class SSLConfigurationService {
    private final Logger logger = LoggerFactory.getLogger(SSLConfigurationService.class);
    private final SecretsManagerService secretsManagerService;

    @Autowired
    public SSLConfigurationService(SecretsManagerService secretsManagerService) {
        this.secretsManagerService = secretsManagerService;
        configureSSL();
    }

    private void configureSSL() {
        try {
            // Fetch keystore and password from AWS Secrets Manager
            byte[] keystoreData = secretsManagerService.getBinarySecret("DocPalAppKeystore");
            String keystorePassword = secretsManagerService.getStringSecret("DocPalAppKeystorePassword");

            // Load the keystore
            KeyStore keystore = KeyStore.getInstance("PKCS12");
            keystore.load(new ByteArrayInputStream(keystoreData), keystorePassword.toCharArray());

            // Set up SSL context
            SSLContext sslContext = SSLContext.getInstance("TLS");
            sslContext.init(null, null, new SecureRandom());
            HttpsURLConnection.setDefaultSSLSocketFactory(sslContext.getSocketFactory());

            logger.info("SSL context configured successfully.");
        } catch (Exception e) {
            logger.error("Failed to configure SSL context", e);
            throw new RuntimeException("Failed to configure SSL context", e);
        }
    }
}
