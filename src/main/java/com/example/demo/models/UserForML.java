package com.example.demo.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
@Table(name = "usersForML")
public class UserForML {

    @Id
    private Integer id;

    @Column(name = "user_id")
    private Integer userId;

    @Column(name = "add-to-cart")
    private Float addToCart;

    @Column(name = "click")
    private Float click;

    @Column(name = "favourite")
    private Float favourite;

    @Column(name = "purchase")
    private Float purchase;

    @Column(name = "sale_click_purchase")
    private Float saleClickPurchase;

    @Column(name = "sale_fav_purchase")
    private Float saleFavPurchase;

    @Column(name = "sale_add_purchase")
    private Float saleAddPurchase;

    @Column(name = "nosale_click_purchase")
    private Float nosaleClickPurchase;

    @Column(name = "nosale_fav_purchase")
    private Float nosaleFavPurchase;

    @Column(name = "nosale_add_purchase")
    private Float nosaleAddPurchase;

    @Column(name = "purchase_ratio")
    private Float purchaseRatio;

    @Column(name = "avg_action_day_ratio")
    private Float avgActionDayRatio;

    @Column(name = "avg_active_day")
    private Float avgActiveDay;

    @Column(name = "longest_inactivity_days")
    private Float longestInactivityDays;

    @Column(name = "longest_purchase_gap")
    private Float longestPurchaseGap;

    @Column(name = "age")
    private Float age;

    // BOOLEAN FIELDS (tinyint(1))
    @Column(name = "sex_F")
    private Float sexF;

    @Column(name = "sex_M")
    private Float sexM;

    @Column(name = "sex_other")
    private Float sexOther;

    @Column(name = "marital_status_Divorced")
    private Float maritalStatusDivorced;

    @Column(name = "marital_status_Married")
    private Float maritalStatusMarried;

    @Column(name = "marital_status_Single")
    private Float maritalStatusSingle;
}
