<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class AccountStatusChanged extends Notification
{
    use Queueable;

    public $acct_status;

    public $previousStatus;
    public $updatedStatus;



    /**
     * Create a new notification instance.
     *
     * @return void
     */
    public function __construct($previousStatus, $updatedStatus)
    {
        $this->acct_status = [
            'previous' => $previousStatus,
            'updated' => $updatedStatus
        ];

    }

    /**
     * Get the notification's delivery channels.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function via($notifiable)
    {
        return ['mail'];
    }

    /**
     * Get the mail representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return \Illuminate\Notifications\Messages\MailMessage
     */
    public function toMail($notifiable)
    {
        return (new MailMessage)
        ->subject('Account Status Updated')
        ->greeting('Hello!')
        ->line('Your account status has been updated.')
        ->line('Previous status: ' . $this->acct_status['previous'])
        ->line('Updated status: ' . $this->acct_status['updated']);
    }

    /**
     * Get the array representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function toArray($notifiable)
    {
        return [
            //
        ];
    }
}
