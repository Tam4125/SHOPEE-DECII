package com.example.demo.dtos;

import jakarta.persistence.Column;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class PredictorForm {
    private Float addToCart;
    private Float click;
    private Float favourite;
    private Float purchase;
    private Float saleClickPurchase;
    private Float saleFavPurchase;
    private Float saleAddPurchase;
    private Float nosaleClickPurchase;
    private Float nosaleFavPurchase;
    private Float nosaleAddPurchase;
    private Float purchaseRatio;
    private Float avgActionDayRatio;
    private Float avgActiveDay;
    private Float longestInactivityDays;
    private Float longestPurchaseGap;
    private Float age;

    // BOOLEAN FIELDS (tinyint(1))
    private Boolean sexF;
    private Boolean sexM;
    private Boolean sexOther;
    private Boolean maritalStatusDivorced;
    private Boolean maritalStatusMarried;
    private Boolean maritalStatusSingle;
}
