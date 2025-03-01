package models

import (
	"gomessage/utils/database"
	"gorm.io/gorm"
	"time"
)

type Record struct {
	ID        int            `json:"id" gorm:"primarykey"`
	CreatedAt time.Time      `json:"-"`
	UpdatedAt time.Time      `json:"-"`
	DeletedAt gorm.DeletedAt `json:"-" gorm:"index"`
	Ip        string         `json:"ip"`
	Namespace string         `json:"namespace"`
	Url       string         `json:"url"`
	Clients   string         `json:"clients"`
}

func (*Record) TableName() string {
	return "records"
}

// AddRecord 添加一条发送记录
func AddRecord(r *Record) (*Record, error) {
	result := database.DB.DefaultClient.Create(&r)
	return r, result.Error
}
